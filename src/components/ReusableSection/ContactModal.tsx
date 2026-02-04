import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostAskForHelp } from "@/lib/hooks/useContact";
import { AskForHelpData } from "@/lib/type/contact";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState<AskForHelpData>({
    issue: "listing",
    description: "",
    email: "",
  });

  const { mutate: postAskForHelp, isPending } = usePostAskForHelp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    postAskForHelp(formData, {
      onSuccess: () => {
        toast.success("Request sent successfully!");
        console.log(" Ask For Help Submission Data:", formData);
        setFormData({
          issue: "listing",
          description: "",
          email: "",
        });
        onClose();
      },
      onError: (error) => {
        toast.error("Failed to send request. Please try again.");
        console.error("Submission failed:", error);
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl rounded-3xl p-6">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-3xl font-bold text-[#1A1A1A]">
            Ask For <span className="text-[#65A30D]">Help</span>
          </DialogTitle>
          <DialogDescription className="text-[#666666] text-base">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-6">
          <FieldGroup className="space-y-5">
            {/* <Field className="space-y-2">
              <Label
                htmlFor="issue"
                className="text-sm font-semibold text-[#333333]"
              >
                Subject / Issue
              </Label>
              <Input
                id="issue"
                name="issue"
                placeholder="What is the issue?"
                value={formData.issue}
                onChange={handleChange}
                required
                className="h-12 border-[#E5E7EB] focus:ring-[#65A30D] rounded-xl"
              />
            </Field> */}

            <Field className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-[#333333]"
              >
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 border-[#E5E7EB] focus:ring-[#65A30D] rounded-xl"
              />
            </Field>

            <Field className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-semibold text-[#333333]"
              >
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your issue in detail"
                value={formData.description}
                onChange={handleChange}
                required
                className="min-h-[120px] border-[#E5E7EB] focus:ring-[#65A30D] rounded-xl resize-none"
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-8 gap-3 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 h-12 border-[#E5E7EB] text-[#666666] hover:bg-[#F9FAFB] rounded-xl font-semibold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="flex-1 h-12 bg-[#65A30D] hover:bg-[#52840b] text-white rounded-xl font-semibold transition-all"
            >
              {isPending ? "Sending..." : "Submit Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;