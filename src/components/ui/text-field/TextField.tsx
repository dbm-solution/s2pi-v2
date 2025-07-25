"use client"

/**
 * A fully-typed, accessible text-input / textarea component with
 * built-in S2PI theming, character-counting and auto-resize support.
 *
 * KEY FIX:
 *   • If `value` is provided without `onChange`, we treat the input as UNCONTROLLED
 *     by passing the value through `defaultValue` instead of `value`.
 *     This prevents React’s “read-only field” warning.
 */

import * as React from "react"
import { cn } from "@/lib/utils"
import { S2PITextField, S2PITextArea } from "./s2pi-form-fields" // Declare the variables before using them

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  helperText?: string
  errorText?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  multiline?: boolean
  rows?: number
  fullWidth?: boolean
  characterCount?: boolean
  maxLength?: number
  /**
   * Visual variant – keep “s2pi” for brand styling.
   */
  variant?: "default" | "outlined" | "filled" | "underlined" | "s2pi"
  /** Shorthand to enable S2PI colours / fonts. */
  s2piStyle?: boolean
  /** Auto-expands a textarea to fit its content. */
  autoResize?: boolean
}

export const TextField = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, TextFieldProps>(
  (props, forwardedRef) => {
    const {
      className,
      label,
      helperText,
      errorText,
      startIcon,
      endIcon,
      multiline,
      rows = 3,
      fullWidth,
      characterCount,
      maxLength,
      variant = "default",
      s2piStyle,
      autoResize,
      value,
      onChange,
      style,
      required,
      ...rest
    } = props

    // If both `value` and `onChange` are supplied => controlled
    // If `value` without `onChange` => switch to uncontrolled w/ defaultValue
    const isControlled = value !== undefined && onChange !== undefined
    const [fallbackValue, setFallbackValue] = React.useState(typeof value === "string" ? value : "")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange?.(e as any)
      if (!isControlled) setFallbackValue(e.target.value)

      if (autoResize && multiline) {
        const el = e.target as HTMLTextAreaElement
        el.style.height = "auto"
        el.style.height = `${el.scrollHeight}px`
      }
    }

    /* ----------------------------- Styling ----------------------------- */

    const baseInputStyles =
      "peer block w-full rounded-md border px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 disabled:opacity-50"

    const variantStyles: Record<NonNullable<TextFieldProps["variant"]>, string> = {
      default: "border-gray-300 focus:border-[#1d4572] focus:ring-4 focus:ring-[#1d4572]/10",
      outlined: "border-2 border-gray-300 focus:border-[#1d4572] focus:ring-4 focus:ring-[#1d4572]/10",
      filled: "border-transparent bg-gray-50 focus:border-[#1d4572] focus:ring-4 focus:ring-[#1d4572]/10",
      underlined: "rounded-none border-x-0 border-t-0 border-b border-gray-300 focus:border-b-[#1d4572]",
      s2pi: "border-gray-300 focus:border-[#1d4572] focus:ring-4 focus:ring-[#1d4572]/10 font-['Open_Sans'] text-[#1d4572]",
    }

    const inputClasses = cn(
      baseInputStyles,
      variantStyles[variant],
      s2piStyle && "font-['Open_Sans'] text-[#1d4572]",
      startIcon && "pl-9",
      endIcon && "pr-9",
      className,
    )

    const wrapperClasses = cn("flex flex-col", fullWidth && "w-full")

    /* --------------------------- Input element -------------------------- */

    const commonProps = {
      className: inputClasses,
      onChange: handleChange,
      maxLength,
      // Controlled vs uncontrolled
      ...(isControlled ? { value } : { defaultValue: fallbackValue }), // <-- crucial fix
      style,
      ref: forwardedRef as never,
    }

    const inputElement = multiline ? (
      <textarea rows={rows} {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} {...commonProps} />
    ) : (
      <input {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} {...commonProps} />
    )

    /* --------------------------- Auto-resize once ------------------------ */
    React.useEffect(() => {
      if (autoResize && multiline && forwardedRef && "current" in forwardedRef && forwardedRef.current) {
        const el = forwardedRef.current as HTMLTextAreaElement
        el.style.height = "auto"
        el.style.height = `${el.scrollHeight}px`
      }
    }, [autoResize, multiline, forwardedRef])

    /* ------------------------------ Render ------------------------------ */

    const currentLength = (isControlled ? (value as string) : fallbackValue)?.length

    return (
      <div className={wrapperClasses}>
        {label && (
          <label className="mb-1 text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}

        <div className="relative">
          {startIcon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{startIcon}</span>}

          {/* Clone to merge dynamic padding classes */}
          {React.cloneElement(inputElement, { className: inputClasses })}

          {endIcon && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">{endIcon}</span>}
        </div>

        {(helperText || errorText || characterCount) && (
          <div className="mt-1 flex items-center justify-between text-xs leading-relaxed">
            <span className={cn(errorText ? "text-red-600" : "text-gray-500")}>{errorText || helperText}</span>

            {characterCount && maxLength && (
              <span className="text-gray-400">
                {currentLength}/{maxLength}
              </span>
            )}
          </div>
        )}
      </div>
    )
  },
)
TextField.displayName = "TextField"

// --- explicit re-exports ----------------------------------------------------
export { S2PITextField, S2PITextArea } // Remove the default export as it's not used
