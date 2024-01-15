package com.server.taxco.domain

import com.server.taxco.resources.PostDocument
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable

// TODO: Pensar em alguma solução melhor para fazer isso aqui sem importar o pageable direto no domain
interface PostRepository {
    fun findById(postId: PostId): Post?
    fun save(post: Post)
    fun findAll(pageable: Pageable): Page<PostDocument>
}
