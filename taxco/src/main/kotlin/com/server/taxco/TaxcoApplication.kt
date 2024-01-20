package com.server.taxco

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TaxcoApplication

fun main(args: Array<String>) {
    runApplication<TaxcoApplication>(*args)
}
