CREATE TYPE "public"."admin_role" AS ENUM('admin', 'superadmin');--> statement-breakpoint
ALTER TABLE "admins" ADD COLUMN "role" "admin_role" DEFAULT 'admin' NOT NULL;