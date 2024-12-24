'use client';

import React, { useState } from 'react';
import { VStack, Heading, HStack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <VStack>
      <Heading size='5xl'>Counter</Heading>
      <HStack>
        <Button colorPalette='red' onClick={() => setCount((prev) => prev - 1)}>
          -
        </Button>
        <Heading size='3xl'>{count}</Heading>
        <Button
          colorPalette='green'
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </Button>
      </HStack>
    </VStack>
  );
};

export default Counter;
