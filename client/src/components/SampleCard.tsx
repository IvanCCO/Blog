import { 
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Image,
    Divider,
    Stack,
    ButtonGroup,
    Button,
    Heading
} from '@chakra-ui/react'


export function SampleCard() {

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://th.bing.com/th/id/OIG.pM5yvYt8jXgKE4HyVvUx?pid=ImgGn'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Orquestando conteiners com Kubernets</Heading>
                        <Text>
                            Que o Kubernetes está ficando o tal tal tal todo mundo sabe mas agora
                            como de fato orquestrar conteiners com ele e fazer a diferenca é algo 
                            que pou...
                        </Text>
                    </Stack>
                </CardBody>
            </Card>


        </>
    )

}
