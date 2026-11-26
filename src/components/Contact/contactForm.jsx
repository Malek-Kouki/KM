import { useState } from "react";

export const contactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}); // <--- NOUVEAU
  const [popup, setPopup] = useState({ visible: false, message: "", type: "" });
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // <--- NOUVEAU : Validation champ par champ en temps réel
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return !value.trim() ? "Full name is required." : "";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email.";
        return "";
      case "subject":
        return !value.trim() ? "Subject is required." : "";
      case "message":
        return !value.trim() ? "Message cannot be empty." : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    // Marquer le champ comme touché et valider instantanément
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) }); // <--- MODIFIÉ
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Marquer tous les champs comme touchés à la soumission
    setTouched({ name: true, email: true, subject: true, message: true });

    // Vérifier s'il y a des erreurs
    const newErrors = {};
    let isValid = true;
    Object.keys(formValues).forEach((key) => {
      const error = validateField(key, formValues[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const formData = new FormData(event.target);
    formData.append("access_key", "419b2ef0-a10f-4731-896c-06d9846fed23");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setPopup({
        visible: true,
        message: "Message sent successfully!",
        type: "success",
      });
      setFormValues({ name: "", email: "", subject: "", message: "" });
      setTouched({}); // <--- Réinitialiser les touchés
    } else {
      setPopup({
        visible: true,
        message: "Error sending message. Please try again.",
        type: "error",
      });
    }

    setTimeout(() => {
      setPopup({ visible: false, message: "", type: "" });
    }, 3000);
  };

  return {
    formValues,
    errors,
    touched, // <--- NOUVEAU à retourner
    popup,
    copiedField,
    handleChange,
    onSubmit,
    handleCopy,
  };
};