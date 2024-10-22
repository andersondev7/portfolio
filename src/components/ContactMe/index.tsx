import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import * as yup from "yup";

import Title from "../Title/Title";
import { CardContact, Container, ContainerCard, ContainerForm } from "./styles";

const trustedDomains = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.com",
  "icloud.com",
  "protonmail.com",
  "live.com",
  "msn.com",
  "aol.com",
  "zoho.com",
  "gmx.com",
  "me.com",
];

const schema = yup.object().shape({
  user_name: yup.string().required({
    pt: "Nome é obrigatório.",
    en: "Name is required.",
  }),
  user_email: yup
    .string()
    .required({
      pt: "Email é obrigatório.",
      en: "Email is required.",
    })
    .email({
      pt: "Email inválido.",
      en: "Invalid email.",
    })
    .test(
      "valid-domain",
      {
        pt: "Adicione um e-mail válido.",
        en: "Please provide a valid email.",
      },
      (value) => {
        if (!value) return true;
        const domain = value.split("@")[1];
        return trustedDomains.includes(domain);
      }
    ),
  user_telefone: yup
    .string()
    .required({
      pt: "Telefone é obrigatório.",
      en: "Phone number is required.",
    })
    .matches(/^[0-9]*$/, {
      pt: "O telefone deve conter apenas números.",
      en: "Phone number must contain only numbers.",
    })
    .min(10, {
      pt: "O telefone deve ter pelo menos 10 dígitos.",
      en: "Phone number must be at least 10 digits long.",
    }),
  message: yup.string().required({
    pt: "Mensagem é obrigatória.",
    en: "Message is required.",
  }),
});

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { t, i18n } = useTranslation();

  const infoCards = [
    {
      id: 1,
      icon: <FaWhatsapp size={24} />,
      label: t("contactMe.whatsapp.label"),
      value: t("contactMe.whatsapp.value"),
      link: t("contactMe.whatsapp.link"),
    },
    {
      id: 2,
      icon: <MdOutlineEmail size={24} />,
      label: t("contactMe.email.label"),
      value: t("contactMe.email.value"),
      link: t("contactMe.email.link"),
    },
    {
      id: 3,
      icon: <FaLinkedin size={24} />,
      label: t("contactMe.linkedin.label"),
      value: t("contactMe.linkedin.value"),
      link: t("contactMe.linkedin.link"),
    },
  ];

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      user_name: form.current?.user_name.value,
      user_email: form.current?.user_email.value,
      user_telefone: form.current?.user_telefone.value,
      message: form.current?.message.value,
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      setStatus("sending");

      await emailjs.sendForm(
        "service_gs2xfgh",
        "template_of88djf",
        form.current!,
        "tL8KzqqQJUszGeTr9"
      );

      form.current?.reset();
      setStatus("sent");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            const lang = i18n.language;
            validationErrors[error.path] =
              error.message[lang] || error.message["en"];
          }
        });
        setErrors(validationErrors);
      } else {
        console.error(err);
        setStatus("error");
      }
    }
  };

  return (
    <>
      <Title titleEn={t("header.contact")} titlePt={t("header.contact")} />

      <Container>
        <ContainerCard>
          {infoCards.map((item) => (
            <CardContact key={item.id}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
              <span>{item.value}</span>

              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {t("contactMe.send")} <FaArrowRight size={14} />
              </a>
            </CardContact>
          ))}
        </ContainerCard>

        <ContainerForm>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">
                {t("contactMe.form.name")}
                {errors.user_name && <p>{errors.user_name}</p>}
              </label>
              <input type="text" id="name" name="user_name" />
            </div>

            <div>
              <label htmlFor="email">
                {t("contactMe.form.email")}
                {errors.user_email && <p>{errors.user_email}</p>}
              </label>
              <input type="email" id="email" name="user_email" />
            </div>

            <div>
              <label htmlFor="telefone">
                {t("contactMe.form.phone")}
                {errors.user_telefone && <p>{errors.user_telefone}</p>}
              </label>
              <input type="tel" id="telefone" name="user_telefone" />
            </div>

            <div>
              <label htmlFor="message">
                {t("contactMe.form.message")}
                {errors.message && <p>{errors.message}</p>}
              </label>
              <textarea id="message" name="message" />
            </div>

            <button type="submit" disabled={status === "sending"}>
              {status === "sending"
                ? t("contactMe.form.sending")
                : t("contactMe.form.send")}
            </button>

            {status === "sent" && (
              <p style={{ color: "green" }}>{t("contactMe.form.sent")}</p>
            )}
            {status === "error" && <p>{t("contactMe.form.error")}</p>}
          </form>
        </ContainerForm>
      </Container>
    </>
  );
};

export default ContactMe;
