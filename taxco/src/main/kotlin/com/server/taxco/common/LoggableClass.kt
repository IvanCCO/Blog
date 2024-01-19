package com.server.taxco.common

import org.slf4j.LoggerFactory
import java.lang.Exception

abstract class LoggableClass {

    private val logger: org.slf4j.Logger = LoggerFactory.getLogger(javaClass)
    fun logInfo(message: String) {
        logger.info(message)
    }
    fun logError(message: String) {
        logger.error(message)
    }
    fun logError(message: String, exception: Exception) {
        logger.error(message, exception)
    }
}
