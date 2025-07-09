"use client";

export default function Footer() {
  return (
    <section className="mt-16">
      <div className="flex flex-col gap-4 lg:px-6">

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Simba Works. All rights reserved.
        </p>
      </div>
    </section>
  );
}
