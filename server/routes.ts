import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for waitlist
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const validatedData = insertWaitlistEntrySchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: validationError.details 
        });
      }
      
      const { name, email, role, interest, wantsUpdates } = validatedData.data;
      
      // Check if email already exists in waitlist
      const existingEntry = await storage.getWaitlistEntryByEmail(email);
      if (existingEntry) {
        return res.status(409).json({ 
          message: "Email already registered on the waitlist" 
        });
      }
      
      // Create new waitlist entry
      const newEntry = await storage.createWaitlistEntry({
        name,
        email,
        role,
        interest,
        wantsUpdates: wantsUpdates || false
      });
      
      return res.status(201).json({
        message: "Successfully added to waitlist",
        entry: newEntry
      });
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({ 
        message: "Failed to process waitlist request" 
      });
    }
  });

  // Get all waitlist entries (could be admin protected in a real app)
  app.get("/api/waitlist", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getAllWaitlistEntries();
      return res.status(200).json(entries);
    } catch (error) {
      console.error("Error getting waitlist entries:", error);
      return res.status(500).json({ 
        message: "Failed to retrieve waitlist entries" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
