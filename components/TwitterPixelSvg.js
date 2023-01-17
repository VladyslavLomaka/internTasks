import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function TwitterPixel(props) {
  return (
    <Svg
      height={800}
      width={800}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      {...props}>
      <Path d='M445.217 161.391V94.609h-33.391V61.217h-33.391V27.826H256v33.391h-33.391v33.392h-33.392v66.782h-44.521V128h-44.522V94.609H66.783V61.217H0v189.218h33.391v33.391h33.392v33.391h66.782v33.392h-33.391V384H66.783v33.391H33.391v66.783h311.652v-33.391h33.392v-33.392h33.391V384h33.391V261.565h33.392v-33.391H512v-66.783z' />
    </Svg>
  );
}
