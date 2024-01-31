"use client";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { SET_PERSONAL_INFORMATION } from "@/app/redux/reducers/checkoutSlice";

import Input from "../ui/input";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

export default function PersonalInformation({ nextStep }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const submitForm = async (values) => {
    // form validation before submission
    dispatch(SET_PERSONAL_INFORMATION(values));
  };
  return (
    <>
      <div className="py-4 border-b border-solid border-neutral-80">
        <h3 className="px-[32px]">Add your Personal Information</h3>
      </div>
      <div className="pt-6 pb-4 ">
        <p className="text-grey-700 text-[13px] pb-4 px-[32px]">
          Personal Information
        </p>

        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            password: "",
            confirm_password: "",
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
                    id="first_name"
                    name="first_name"
                    title="First Name"
                    optional={false}
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.first_name && touched.first_name)}
                    errors={errors.first_name}
                  />
                  <Input
                    type="text"
                    id="last_name"
                    name="last_name"
                    title="Last Name"
                    optional={false}
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.last_name && touched.last_name)}
                    errors={errors.last_name}
                  />
                  <div />

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    title="Email Address"
                    optional={false}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.email && touched.email)}
                    errors={errors.email}
                  />
                  <Input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    title="Phone Number"
                    optional={false}
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.phone_number && touched.phone_number)}
                    errors={errors.phone_number}
                  />
                  <div />

                  <Input
                    type="password"
                    id="password"
                    name="password"
                    title="Password"
                    optional={false}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.password && touched.password)}
                    errors={errors.password}
                  />
                  <Input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    title="Confirm Password"
                    optional={false}
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      !!(errors.confirm_password && touched.confirm_password)
                    }
                    errors={errors.confirm_password}
                  />
                  <div />
                </div>

                <div className="flex gap-2 justify-end pt-6 pb-4 px-[32px] border-t border-solid border-neutral-80 mt-[166px]">
                  <Button secondary={true} onClick={() => router.push("/")}>
                    Cancel
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
