package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType
import com.server.taxco.domain.article.ArticleId

class ArticleNotFoundException(
    articleId: ArticleId?,
    msg: String = "Article with ID: ${articleId?.value} was not found."
) : DomainException(
    type = ErrorType.ARTICLE_NOT_FOUND,
    msg = msg
)
