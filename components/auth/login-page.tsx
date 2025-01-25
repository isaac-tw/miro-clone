import { SignInButton } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-10 bg-[#161616]">
      <SignInButton>
        <button type="button" className="glowing-btn">
          Sign In
        </button>
      </SignInButton>
      <p className="text-center text-white">
        Note: New sign-ups are currently restricted. <br />
        To request access for a new account, please contact&nbsp;
        <a
          className="text-blue-400 hover:underline"
          href="mailto:isaac.huang.tw@gmail.com"
        >
          me
        </a>
        .
      </p>
    </div>
  );
};

export default LoginPage;
