import Hint from "@/components/hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

const UserAvatar = ({ src, name, fallback, borderColor }: UserAvatarProps) => {
  return (
    <div>
      <Hint label={name || "default name"} side="bottom" sideOffset={18}>
        <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
          <AvatarImage src={src} />
          <AvatarFallback className="text-xs font-semibold">
            {fallback}
          </AvatarFallback>
        </Avatar>
      </Hint>
    </div>
  );
};

export default UserAvatar;
