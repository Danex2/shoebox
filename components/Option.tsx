type OptionProps = {
  value: string;
  name?: string;
};

export default function Option({ value, name }: OptionProps) {
  return (
    <option style={{ background: "#2D3748" }} value={value}>
      {name}
    </option>
  );
}
