"use client";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { SET_SHIPPING_ADDRESS } from "@/app/redux/reducers/checkoutSlice";

import Button from "../ui/button";
import Input from "../ui/input";

export default function ShippingAddress({ nextStep, prevStep }) {
  const dispatch = useDispatch();

  const submitForm = async (values) => {
    // form validation before submission
    dispatch(SET_SHIPPING_ADDRESS(values));
  };

  return (
    <>
      <div className="py-4 border-b border-solid border-neutral-80">
        <h3 className="px-[32px]">Add new Address</h3>
      </div>
      <div className="pt-6 pb-4 ">
        <p className="text-grey-700 text-[13px] pb-4 px-[32px]">
          Shipping Information
        </p>
        <Formik
          initialValues={{
            street: "",
            apartment_floor: "",
            town: "",
            state: "",
            more_address: "",
          }}
          enableReinitialize={true}
          validateOnChange={true}
          validateOnBlur={false}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isValid,
              dirty,
              handleBlur,
              handleChange,
              isSubmitting,
            } = props;

            return (
              <Form>
                <div className="grid grid-cols-3 gap-[24px] px-[32px]">
                  <Input
                    type="text"
                    id="street"
                    name="street"
                    title="Street Address"
                    optional={false}
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.street && touched.street)}
                    errors={errors.street}
                  />
                  <Input
                    type="text"
                    id="apartment_floor"
                    name="apartment_floor"
                    title="Apartment, floor, etc. (optional)"
                    optional={true}
                    value={values.apartment_floor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      !!(errors.apartment_floor && touched.apartment_floor)
                    }
                    errors={errors.apartment_floor}
                  />
                  <div />

                  <Input
                    type="text"
                    id="town"
                    name="town"
                    title="Town/City*"
                    optional={false}
                    value={values.town}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.town && touched.town)}
                    errors={errors.town}
                  />
                  <Input
                    type="text"
                    id="state"
                    name="state"
                    title="State"
                    optional={false}
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.state && touched.state)}
                    errors={errors.state}
                  />
                  <div />

                  <Input
                    type="text"
                    id="more_address"
                    name="more_address"
                    title="Addtional Address"
                    optional={true}
                    divClass="col-span-2"
                    value={values.more_address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.more_address && touched.more_address)}
                    errors={errors.more_address}
                  />
                  {/* additional address */}
                  {/* address label */}
                  {/* set as default */}
                </div>

                <div className="flex gap-2 justify-end pt-6 pb-4 px-[32px] border-t border-solid border-neutral-80 mt-[166px]">
                  <Button secondary={true} onClick={prevStep}>
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    onClick={() => submitForm(values).then((_) => nextStep())}
                    small={true}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
