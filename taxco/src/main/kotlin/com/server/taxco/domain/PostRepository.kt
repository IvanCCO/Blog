package com.server.taxco.domain

interface PostRepository {
    fun findById(postId: PostId): Post?
    fun save(post: Post)
}
