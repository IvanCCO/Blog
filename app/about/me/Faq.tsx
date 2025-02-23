"use client";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Center,
    Heading,
} from "@chakra-ui/react";
import { Reveal } from "../../../components/Reveal";


const dict =
{
    title: "FAQ",
    questions: [
        {
            question: "Qual o seu sonho?",
            answer: "Meu sonho é viajar o mundo e construir algo significativo para sociedade, eu quero ser lembrado, não queremos todos? Você pode acompanhar meu progresso indo na Aba Globo aqui no Site."
        },
        {
            question: "Você faz anotações dos seus livros em algum lugar?",
            answer: "Sim, você pode acessar a o link abaixo que irá levar para as anotações que faço dos livros que li, os destaques são movidos automaticamente pelo meu produto Kindle2Notion."
        },
        {
            question: "Com que frequência você posta nesse blog?",
            answer: "Não com a frequência que gostaria, eu basicamente escrevo quando estou inspirado e acho que tem algo de relevante para contar, em números +- 1 vez a cada 2 meses."
        },
        {
            question: "Filosofia?",
            answer: "Essa pergunta não é frequente, mas não poderia deixar de citar que eu amo filosofia, não consigo me ver sem filosofia, os autores que mais gosto são Camus, Sartre e Nietzsche, U Must imagine Sisifo happy 😁"
        },
    ]
}


export default function FAQ() {
    return (
        <Center flexDirection={"column"} color={"white"} fontFamily={"Inter, sans-serif"} py={8}>
            <Reveal
                animation={{ delay: 0.5 }}
                position={{ y: 75 }}
                width="100%"
            >
                <>
                    <Heading
                        as={"h2"}
                        size={"xl"}
                        color={"white"}
                        textAlign={"center"}
                        fontWeight={"semibold"}
                        mb={12}
                    >
                        {dict.title}
                    </Heading>
                    <Accordion
                        allowToggle
                        w="100%"
                    >
                        {dict.questions.map((q, index) => {
                            return (
                                <AccordionItem key={index} py={1}>
                                    <h2>
                                        <AccordionButton _hover={{}}>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="left"
                                                fontWeight="light"
                                            >
                                                {q.question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <p className="text-base text-low-text-black">{q.answer}</p>
                                    </AccordionPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </>
            </Reveal>
        </Center>
    );
}