import React from 'react';
declare type SpaceSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
declare type SpacerProps = React.HTMLAttributes<HTMLDivElement> & {
    layout?: 'horizontal' | 'vertical';
    size?: SpaceSize;
};
declare const Spacer: ({ layout, size, ...rest }: SpacerProps) => JSX.Element;
export default Spacer;
//# sourceMappingURL=index.d.ts.map