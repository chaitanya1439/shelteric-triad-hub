
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PhoneCall, ArrowRight, Github } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const phoneSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits")
});

const otpSchema = z.object({
  otp: z.string().min(6, "OTP must be 6 digits")
});

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneForm = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: ""
    }
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: ""
    }
  });

  const onPhoneSubmit = (data: z.infer<typeof phoneSchema>) => {
    setPhoneNumber(data.phone);
    setStep("otp");
    // In a real app, you would send an OTP to this phone number
    console.log("Sending OTP to:", data.phone);
  };

  const onOtpSubmit = (data: z.infer<typeof otpSchema>) => {
    // In a real app, you would verify the OTP
    console.log("Verifying OTP:", data.otp);
    onClose();
  };

  const handleGoogleSignIn = () => {
    // In a real app, you would implement Google sign-in
    console.log("Sign in with Google");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            {step === "phone" ? "Sign in to Shelteric" : "Enter OTP"}
          </DialogTitle>
        </DialogHeader>

        {step === "phone" ? (
          <div className="space-y-6 py-4">
            <Form {...phoneForm}>
              <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-4">
                <FormField
                  control={phoneForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <div className="flex items-center bg-muted px-3 rounded-l-md border border-r-0 border-input">
                            <span className="text-sm">+91</span>
                          </div>
                          <Input 
                            className="rounded-l-none" 
                            placeholder="Enter your mobile number" 
                            {...field} 
                            type="tel"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">or</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleGoogleSignIn}
            >
              <Github className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <p className="text-center text-sm text-muted-foreground">
              We've sent a 6-digit code to <span className="font-medium">+91 {phoneNumber}</span>
            </p>

            <Form {...otpForm}>
              <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-4">
                <FormField
                  control={otpForm.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center">
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  Verify & Sign In
                </Button>
              </form>
            </Form>

            <div className="flex justify-between">
              <Button 
                variant="link" 
                className="text-sm text-brand-blue p-0 h-auto" 
                onClick={() => setStep("phone")}
              >
                Change number
              </Button>
              <Button 
                variant="link" 
                className="text-sm text-brand-blue p-0 h-auto" 
                onClick={() => console.log("Resend OTP")}
              >
                Resend OTP
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
