import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import chakraLogo from './assets/chakra.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      minH='100vh'
      gap={4}
    >
      <Flex gap={8}>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <Image src='/vite.svg' alt='Vite logo' boxSize={20} />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <Image src={reactLogo} alt='React logo' boxSize={20} />
        </a>
        <a href='https://chakra-ui.com/' target='_blank' rel='noreferrer'>
          <Image src={chakraLogo} alt='Chakra logo' boxSize={20} />
        </a>
      </Flex>
      <Heading as='h1'>Vite + React + Chakra UI</Heading>
      <Flex direction='column' justify='center' align='center' gap={4}>
        <Button
          colorScheme='blue'
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>
        <Text>
          Edit <code>src/App.jsx</code> and save to test HMR
        </Text>
      </Flex>
      <Text>Click on the Vite and React logos to learn more</Text>
    </Flex>
  )
}

export default App
