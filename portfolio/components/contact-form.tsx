"use client"

import {z} from "zod"
import Link from "next/link"
import {toast} from "sonner"
import {SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {ContactFormSchema} from "@/lib/schemas"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {sendEmail} from "@/lib/actions"

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}
} = useForm<Inputs>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

const processForm: SubmitHandler<Inputs> = async data => {
    const result = await sendEmail(data)

    if (result?.error) {
        toast.error("An error occurred. Please try again.")
        return
    }

    toast.success("Message sent successfully!")
    reset()
}

return (
   <section className="relative isolate">
    {/* Background pattern */}
    {/* <svg
        className="absolute inset-0 w-full h-full"
        aria-hidden="true">

            <defs>
                <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="50%"
                    y={-64}
                    patternUnits="userSpaceOnUse" >
                   
                    <rect
                        width="10"
                        height="20"
                        fill="#f3f4f6" />
                </pattern>
            </defs>
            </svg> */}

            {/* Form */}
            <div className="relative">
                <form
                    onSubmit={handleSubmit(processForm)}
                    className="mt-16 lg:flex-auto"
                    noValidate>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Name */}
                            <div>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Name"
                               autoComplete="given-name"
                                {...register("name")}
                            />

                            {errors.name?.message && (
                                <p className="ml-1 mt-2 text-sm">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <Input
                                type="Email"
                                id="email"
                                autoComplete="email"
                                placeholder="Email"
                                {...register("email")}
                            />

                            {errors.email?.message && (
                                <p className="ml-1 mt-2 text-sm text-rose-400">{errors.email.message}</p>
                            )}
                 </div>

                 {/* Message */}
                    <div className="sn:col-span-2">
                        <Textarea
                            rows={4}
                            placeholder="Message"
                            {...register("message")}
                        />
    
                        {errors.message?.message && (
                            <p className="ml-1 mt-2 text-sm text-rose-400">{errors.message.message}</p>
                        )}

                            </div>
            </div>

            <div className="mt-6">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full disabled:opacity-50">

                    {isSubmitting ? "Submitting..." : "Contact Us"}
                </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
                By submitting this form, I agree to the{" "}
                <Link href="/privacy" className="font-bold">
                   privacy&nbsp;policy.
                </Link>
            </p>
        </form>
    </div> 
   </section>
)
}
