"use client"

import React from "react"
import { TextField, type TextFieldProps } from "./text-field"
import { cn } from "@/lib/utils"

// S2PI specific form field components
export const S2PITextField = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ className, ...props }, ref) => (
    <TextField ref={ref as any} variant="s2pi" s2piStyle className={cn("font-['Open_Sans']", className)} {...props} />
  ),
)

S2PITextField.displayName = "S2PITextField"

export const S2PITextArea = React.forwardRef<
  HTMLInputElement,
  Omit<TextFieldProps, "s2piStyle" | "variant" | "multiline">
>(({ className, rows = 4, ...props }, ref) => (
  <TextField
    ref={ref as any}
    variant="s2pi"
    s2piStyle
    multiline
    rows={rows}
    autoResize
    className={cn("font-['Open_Sans'] resize-none", className)}
    {...props}
  />
))

S2PITextArea.displayName = "S2PITextArea"

// Specialized S2PI form fields based on common website patterns
export const S2PIEmailField = React.forwardRef<
  HTMLInputElement,
  Omit<TextFieldProps, "type" | "s2piStyle" | "variant">
>(({ label = "Adresse e-mail", placeholder = "votre@email.com", ...props }, ref) => (
  <S2PITextField ref={ref} type="email" label={label} placeholder={placeholder} {...props} />
))

S2PIEmailField.displayName = "S2PIEmailField"

export const S2PIPhoneField = React.forwardRef<
  HTMLInputElement,
  Omit<TextFieldProps, "type" | "s2piStyle" | "variant">
>(({ label = "Téléphone", placeholder = "01 23 45 67 89", ...props }, ref) => (
  <S2PITextField ref={ref} type="tel" label={label} placeholder={placeholder} {...props} />
))

S2PIPhoneField.displayName = "S2PIPhoneField"

export const S2PICompanyField = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ label = "Société", placeholder = "Nom de votre société", ...props }, ref) => (
    <S2PITextField ref={ref} label={label} placeholder={placeholder} {...props} />
  ),
)

S2PICompanyField.displayName = "S2PICompanyField"

export const S2PINameField = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ label = "Nom complet", placeholder = "Prénom Nom", ...props }, ref) => (
    <S2PITextField ref={ref} label={label} placeholder={placeholder} {...props} />
  ),
)

S2PINameField.displayName = "S2PINameField"

export const S2PISubjectField = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ label = "Sujet", placeholder = "Objet de votre demande", ...props }, ref) => (
    <S2PITextField ref={ref} label={label} placeholder={placeholder} {...props} />
  ),
)

S2PISubjectField.displayName = "S2PISubjectField"

export const S2PIMessageField = React.forwardRef<
  HTMLInputElement,
  Omit<TextFieldProps, "s2piStyle" | "variant" | "multiline">
>(({ label = "Message", placeholder = "Décrivez votre demande en détail...", rows = 6, ...props }, ref) => (
  <S2PITextArea
    ref={ref}
    label={label}
    placeholder={placeholder}
    rows={rows}
    characterCount
    maxLength={1000}
    {...props}
  />
))

S2PIMessageField.displayName = "S2PIMessageField"

// Product inquiry specific fields
export const S2PIProductField = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ label = "Quel produit ?", placeholder = "Type de produit recherché", ...props }, ref) => (
    <S2PITextField ref={ref} label={label} placeholder={placeholder} {...props} />
  ),
)

S2PIProductField.displayName = "S2PIProductField"

export const S2PIPVField = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ label = "Quel PV ?", placeholder = "Procès-verbal requis", ...props }, ref) => (
    <S2PITextField ref={ref} label={label} placeholder={placeholder} {...props} />
  ),
)

S2PIPVField.displayName = "S2PIPVField"

export const S2PIThicknessField = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  (
    {
      label = "Quelle épaisseur ?",
      placeholder = "Épaisseur en mm",
      helperText = "La résistance thermique R dépend de l'épaisseur et de la conductivité thermique de l'Innospray",
      ...props
    },
    ref,
  ) => <S2PITextField ref={ref} label={label} placeholder={placeholder} helperText={helperText} {...props} />,
)

S2PIThicknessField.displayName = "S2PIThicknessField"

export const S2PICalculationField = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ label = "Note de calcul ?", placeholder = "Détails du calcul", ...props }, ref) => (
    <S2PITextField ref={ref} label={label} placeholder={placeholder} {...props} />
  ),
)

S2PICalculationField.displayName = "S2PICalculationField"

export const S2PITechnicalConstraintField = React.forwardRef<
  HTMLInputElement,
  Omit<TextFieldProps, "s2piStyle" | "variant" | "multiline">
>(
  (
    {
      label = "Puis-je répondre à la contrainte technique ?",
      placeholder = "Décrivez les contraintes techniques...",
      rows = 4,
      ...props
    },
    ref,
  ) => <S2PITextArea ref={ref} label={label} placeholder={placeholder} rows={rows} {...props} />,
)

S2PITechnicalConstraintField.displayName = "S2PITechnicalConstraintField"

export const S2PICF1Field = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ label = "CF 1 heure, que dois-appliquer ?", placeholder = "Application CF 1 heure", ...props }, ref) => (
    <S2PITextField ref={ref} label={label} placeholder={placeholder} {...props} />
  ),
)

S2PICF1Field.displayName = "S2PICF1Field"

export const S2PICF2Field = React.forwardRef<HTMLInputElement, Omit<TextFieldProps, "s2piStyle" | "variant">>(
  ({ label = "CF 2 heure, que dois-appliquer ?", placeholder = "Application CF 2 heures", ...props }, ref) => (
    <S2PITextField ref={ref} label={label} placeholder={placeholder} {...props} />
  ),
)

S2PICF2Field.displayName = "S2PICF2Field"
