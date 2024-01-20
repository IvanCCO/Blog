package com.server.taxco.common

/**
 *  These are the errors types mapped on this application
 *  They are mapped by a mapper to inform a better response
 *  to the api call
 */
enum class ErrorType {
    UNKNOWN,

    ARTICLE_NOT_FOUND,
    ARTICLE_ALREADY_EXISTS,
}
