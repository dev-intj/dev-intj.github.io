import {
  Linkedin,
  Instagram,
  Email,
  Resume,
} from "../utils/icons";

function downloadFile() {
  var link = document.createElement("a");
  document.body.appendChild(link);
  link.href = "resume.pdf";
  link.download = "";
  link.click();
}

export const SocialMedias = () => {
  return (
    <div className="flex flex-row justify-center gap-24 lg:gap-48 h-24 items-center flex-wrap">
      <button
        className="text-2xl"
        onClick={() =>
          window.open(
            "mailto:demataschristiano@gmail.com"
          )
        }
      >
        <Email />
      </button>
      <button
        className="text-2xl"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/christos-dematas-a50452169/"
          )
        }
      >
        <Linkedin />
      </button>
      <button
        className="text-2xl"
        onClick={() =>
          window.open(
            "https://www.instagram.com/dev_intj/"
          )
        }
      >
        <Instagram />
      </button>
      <button
        className="text-2xl"
        onClick={() => downloadFile()}
      >
        <Resume />
      </button>
    </div>
  );
};
