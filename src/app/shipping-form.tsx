"use client";

import type {InputProps} from "@heroui/react";
import React from "react";
import {Autocomplete, AutocompleteItem, Avatar, Input} from "@heroui/react";
import {cn} from "@heroui/react";
import countries, { countryProp } from "@/app/countries";

export type ShippingFormProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: InputProps["variant"];
  hideTitle?: boolean;
};

const ShippingForm = React.forwardRef<HTMLDivElement, ShippingFormProps>(
  ({variant = "flat", className, hideTitle}, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-4", className)}>
        {!hideTitle && <span className="relative text-foreground-500">Shipping Information</span>}
        <Input
          isRequired
          label="Email address"
          labelPlacement="outside"
          placeholder="Enter your email"
          type="email"
          variant={variant}
        />
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <Input
            isRequired
            label="First name"
            labelPlacement="outside"
            placeholder="Enter your first name"
            variant={variant}
          />
          <Input
            isRequired
            label="Last name"
            labelPlacement="outside"
            placeholder="Enter your last name"
            variant={variant}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <Input
            isRequired
            label="Address"
            labelPlacement="outside"
            placeholder="Lane 1, Street 1"
            variant={variant}
          />
          <Input
            label="Apt, suite, etc."
            labelPlacement="outside"
            placeholder="Apartment, studio, or floor"
            variant={variant}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <Input
            isRequired
            label="City"
            labelPlacement="outside"
            placeholder="Enter your city"
            variant={variant}
          />
          <Autocomplete
            isRequired
            defaultItems={countries}
            label="Country"
            labelPlacement="outside"
            placeholder="Select country"
            showScrollIndicators={false}
            variant={variant}
          >
            {(item: countryProp) => (
              <AutocompleteItem
                key={item.code}
                startContent={
                  <Avatar
                    alt="Country Flag"
                    className="h-6 w-6"
                    src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                  />
                }
              >
                {item.name}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <Input
            isRequired
            label="Postal code"
            labelPlacement="outside"
            placeholder="12345"
            variant={variant}
          />
          <Input
            isRequired
            label="Phone number"
            labelPlacement="outside"
            placeholder="+1 (555) 555-5555"
            variant={variant}
          />
        </div>
      </div>
    );
  },
);

ShippingForm.displayName = "ShippingForm";

export default ShippingForm;
