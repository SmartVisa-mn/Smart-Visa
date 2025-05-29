import { z } from "zod";
import { useZodForm } from "../../hooks/useZodForm";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useContext } from "react";
import { useRouter } from "next/router";
import { FormContext } from "../../context/FormContext";

const personalInfoSchema = z.object({
  name: z.string().min(2, "Name too short"),
  passport: z.string().regex(/^[A-Z0-9]{6,9}$/, "Invalid passport"),
  birth: z.string().refine((d) => !isNaN(Date.parse(d)), "Invalid date"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone"),
});

type PersonalInfo = z.infer<typeof personalInfoSchema>;

function Step1Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm(personalInfoSchema);

  const { formData, setFormData } = useContext(FormContext);
  const router = useRouter();

  const onSubmit = (data: PersonalInfo) => {
    setFormData({ ...formData, ...data });
    router.push("/application/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name</label>
        <input {...register("name")} className="input" />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label>Passport</label>
        <input {...register("passport")} className="input" />
        {errors.passport && (
          <p className="text-red-600">{errors.passport.message}</p>
        )}
      </div>

      <div>
        <label>Birth Date</label>
        <input {...register("birth")} type="date" className="input" />
        {errors.birth && <p className="text-red-600">{errors.birth.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} type="email" className="input" />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label>Phone</label>
        <input {...register("phone")} className="input" />
        {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
      </div>

      <button type="submit" className="btn-primary">
        Next
      </button>
    </form>
  );
}

export default function Step1() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <Step1Form />
    </ErrorBoundary>
  );
}
