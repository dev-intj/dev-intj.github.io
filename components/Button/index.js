import Link from "next/link";

export const Button = ({ className, href, onClick, label }) => {
  return (
    <Link href={href}>
      <button className={className} onClick={() => onClick && onClick()}>
        {label}
      </button>
    </Link>
  );
};
