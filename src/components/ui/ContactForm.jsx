"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (min 10 chars)"),
});

const budgets = ["< $1k", "$1k–$5k", "$5k–$15k", "$15k+", "Not sure yet"];

export default function ContactForm({ withBudget = true }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    const subject = encodeURIComponent(`New enquiry: ${data.service}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "-"}\nService: ${data.service}\nBudget: ${data.budget || "-"}\n\n${data.message}`
    );
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    }
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-brand/30 bg-brand/10 p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-brand-300" />
        <h3 className="font-heading text-2xl font-bold text-white">Thank you!</h3>
        <p className="max-w-md text-white/60">
          Your enquiry is on its way. Our team will get back to you as soon as we
          can. Prefer to talk now? Call{" "}
          <a href={`tel:${site.phoneHref}`} className="font-semibold text-brand-300">
            {site.phone}
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-brand-300 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">
            Full name *
          </label>
          <input {...register("name")} className={field} placeholder="Jane Doe" />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">
            Email *
          </label>
          <input
            {...register("email")}
            className={field}
            placeholder="jane@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">
            Phone
          </label>
          <input
            {...register("phone")}
            className={field}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">
            Service *
          </label>
          <select {...register("service")} className={cn(field, "bg-[#0a0a0a]")} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple / Not sure">Multiple / Not sure</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
          )}
        </div>
      </div>

      {withBudget && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/70">
            Estimated budget
          </label>
          <div className="flex flex-wrap gap-2">
            {budgets.map((b) => (
              <label
                key={b}
                className="cursor-pointer rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand has-[:checked]:text-white"
              >
                <input
                  type="radio"
                  value={b}
                  {...register("budget")}
                  className="sr-only"
                />
                {b}
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/70">
          Project details *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className={cn(field, "resize-none")}
          placeholder="Tell us about your project, goals and timeline..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group btn-primary w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
