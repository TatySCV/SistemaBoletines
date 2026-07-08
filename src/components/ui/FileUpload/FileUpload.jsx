import { useFormContext } from "react-hook-form";

function FileUpload({
  name,
  label,
}) {
  const { setValue, watch } = useFormContext();

  const file = watch(name);

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (!image) return;

    setValue(name, image);
  };

  return (
    <div className="space-y-2">

      <label className="font-medium">

        {label}

      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {file && (

        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          className="mt-4 h-72 rounded-xl border object-cover"
        />

      )}

    </div>
  );
}

export default FileUpload;