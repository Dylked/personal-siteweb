"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn, getEnv } from "@/lib/utils";

import { TextArea } from "./TextArea";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";


export function ContactForm() {

    const serviceId = getEnv(process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID, "NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID");
    const templateId = getEnv(process.env.NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID, "NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID");
    const publicKey = getEnv(process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLIC_ID, "NEXT_PUBLIC_APP_EMAILJS_PUBLIC_ID");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };


    const validate = () => {
        if (!form.name || !form.email || !form.message) return false;

        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(form.email);
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) {
            setStatus("error");
            return;
        }
        setLoading(true);
        setStatus(null);

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                publicKey
            );

            setStatus("success");
            setForm({ name: "", email: "", message: "" });

        } catch (error) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
        console.log("Form data", form)
    };


    return (
        <div
            className="shadow-input mx-auto  p-4 rounded-3xl md:p-8 lg:max-w-[45vw]"
            style={{
                background: 'rgb(4,7,29)',
                backgroundColor:
                    'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
            }}
        >
            <h1 className="heading  text-center  mb-6">
                Vous avez un <span className="text-purple">projet</span> à développer ?
            </h1>
            <p className="mt-2 text-center text-base text-neutral-600 dark:text-neutral-300">
                Échangeons pour voir comment je peux y contribuer.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>

                <LabelInputContainer className="mb-6">
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-6">
                    <Label htmlFor="email">Adresse email</Label>
                    <Input id="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="contact@entreprise.fr"
                        type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-6 md:mb-0">
                    <Label htmlFor="message">Votre message</Label>
                    <TextArea
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Votre message" />

                </LabelInputContainer>


                {status === "success" && (
                    <p className="text-green-500 text-center mt-4">
                        Message envoyé
                    </p>
                )}

                {status === "error" && (
                    <p className="text-red-500 text-center mt-4">
                        Veuillez vérifier les champs et réessayer
                    </p>
                )}

                <div className="flex flex-col items-center">
                    <MagicButton
                        title={loading ? "Envoi en cours..." : "Me contacter"}
                        icon={<FaLocationArrow />}
                        position="right"
                        type="submit"
                        disabled={loading} />
                </div>

            </form>
        </div>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
