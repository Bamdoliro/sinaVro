import React, { SVGProps } from 'react';
import { Svg, Rect, Defs, Pattern, Use, Image } from 'react-native-svg';

const IconActionBlackBell = ({ width, height }: SVGProps<SVGSVGElement>) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
      <Rect width="32" height="24" fill="url(#pattern0_2653_3819)" />
      <Defs>
        <Pattern
          id="pattern0_2653_3819"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            href="#image0_2653_3819"
            transform="matrix(0.0192308 0 0 0.0243902 -3.88462 -3.46341)"
          />
        </Pattern>
        <Image
          id="image0_2653_3819"
          width="1280"
          height="720"
          href="data:image/png;base64,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AAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACgmAAIAAAAAMUEQAAAAAAoJgACAAAAQDEBEAAAAACKCYAAAAAAUEwABAAAAIBiAiAAAAAAFBMAAQAAAKCYAAgAAAAAxQRAAAAAACgmAAIAAABAMQEQAAAAAIoJgAAAAABQTAAEAAAAgGICIAAAAAAUEwABAAAAoJgACAAAAADFBEAAAAAAKCYAAgAAAEAxARAAAAAAigmAAAAAAFBMAAQAAACAYgIgAAAAABQTAAEAAACg2P8CeYTzQvCuh0kAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
};

export default IconActionBlackBell;
