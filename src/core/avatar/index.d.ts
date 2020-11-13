import React from 'react';
declare type AvatarSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
declare type AvatarProps = React.HTMLAttributes<HTMLImageElement> & {
    uri?: string;
    size?: AvatarSize;
};
declare const Avatar: ({ size, uri, ...rest }: AvatarProps) => JSX.Element;
export default Avatar;
//# sourceMappingURL=index.d.ts.map