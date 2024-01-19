package com.server.taxco.domain.post

import com.server.taxco.resources.database.PostDocument
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable

// TODO: Pensar em alguma solução melhor para fazer isso aqui sem importar o pageable direto no domain

/***
 * @repository for
 */
interface PostRepository {

    fun findById(postId: PostId): Post?
    fun save(post: Post)
    fun findAll(pageable: Pageable): Page<PostDocument>
    fun findByTitle(name : String) : Post?
}
