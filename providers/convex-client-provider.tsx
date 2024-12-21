"use client"

import { AuthLoading, Authenticated, ConvexReactClient, Unauthenticated } from "convex/react";
import {
    ClerkProvider,
    SignInButton,
    useAuth,
    UserButton
} from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

interface ConvexClientProviderProps {
    children: React.ReactNode;
};

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
    return (
        <ClerkProvider publishableKey={publishableKey}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <AuthLoading>
                    <h1>Loading...</h1>
                </AuthLoading>
                <Unauthenticated>
                    <SignInButton />
                </Unauthenticated>
                <Authenticated>
                    <UserButton />
                    {children}
                </Authenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};
