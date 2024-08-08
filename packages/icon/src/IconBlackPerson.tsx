import React, { SVGProps } from 'react';
import { Svg, Rect, Defs, Pattern, Use, Image } from 'react-native-svg';

const IconBlackPserson = ({ width, height }: SVGProps<SVGSVGElement>) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 24" fill="none">
      <Rect width="15.3103" height="24" fill="url(#pattern0_2794_838)" />
      <Defs>
        <Pattern
          id="pattern0_2794_838"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            href="#image0_2794_838"
            transform="matrix(0.027027 0 0 0.0172414 -10.2162 -0.706897)"
          />
        </Pattern>
        <Image
          id="image0_2794_838"
          width="1280"
          height="720"
          href="data:image/png;base64,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AIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAwmAAIAAAAAIMJgAAAAAAw2P8CuC5lP8wciG4AAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
};

export default IconBlackPserson;
