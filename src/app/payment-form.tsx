"use client";

import type {InputProps} from "@heroui/react";

import React from "react";
import {Icon} from "@iconify/react";
import {Input} from "@heroui/react";
import {cn} from "@heroui/react";

export type PaymentFormProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: InputProps["variant"];
};

const PaymentForm = React.forwardRef<HTMLDivElement, PaymentFormProps>(
  ({variant = "flat", className, ...props}, ref) => {
    const NumberInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
      <input
        className="w-11 rounded-sm bg-transparent text-small outline-none placeholder:text-default-400"
        min={0}
        minLength={0}
        type="number"
        {...props}
      />
    );

    return (
      <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
        <Input
          isRequired
          label="Email address"
          labelPlacement="outside"
          placeholder="Enter address"
          type="email"
          variant={variant}
        />
        <Input
          isRequired
          endContent={
            <div className="flex max-w-[140px] items-center">
              <NumberInput max={12} maxLength={2} name="card-month" placeholder="MM" />
              <span className="mx-1 text-default-300">/</span>
              <NumberInput max={99} maxLength={2} name="card-year" placeholder="YY" />
              <NumberInput max={999} maxLength={3} name="card-cvc" placeholder="CVC" />
            </div>
          }
          label="Card number"
          labelPlacement="outside"
          minLength={0}
          name="card-number"
          placeholder="Card number"
          startContent={
            <span>
              <Icon className="text-default-400" icon="solar:card-bold" width={20} />
            </span>
          }
          type="number"
          variant={variant}
        />
        <Input
          isRequired
          label="Cardholder name"
          labelPlacement="outside"
          placeholder="Cardholder name"
          variant={variant}
        />
      </div>
    );
  },
);

PaymentForm.displayName = "PaymentForm";

export default PaymentForm;
