package com.server.taxco.resources

import com.server.taxco.domain.Post
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
class PostRepositoryMongo(
    private val postRepositorySpring: PostRepositorySpring,
) {


    fun findById(id: String) {

        postRepositorySpring.findById(id)

    }

    fun save() {

        postRepositorySpring.save(
            PostDocument(
                id = UUID.randomUUID().toString(),
                title = "oienf",
                description = "fioejnf",
                tag = "ofuieno",
            )
        )

    }

}