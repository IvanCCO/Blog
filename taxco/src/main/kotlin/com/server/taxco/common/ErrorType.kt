package com.server.taxco.common

/**
 *  These are the errors types mapped on this application
 *  They are mapped by a mapper to inform a better response
 *  to the api call
 */
enum class ErrorType {
    UNKNOWN,

    POST_NOT_FOUND,
    POST_ALREADY_EXISTS,
}
