package com.server.taxco.domain

import org.springframework.stereotype.Repository

@Repository
interface PostRepository {
    fun findById(id : String) : Post?
    fun save(post : Post)

}