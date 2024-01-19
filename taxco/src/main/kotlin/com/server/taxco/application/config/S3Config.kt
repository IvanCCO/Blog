package com.server.taxco.application.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.s3.S3Client

/*
    All this configuration is fake for now
    I have to make more configurations for s3 to work better
 */
@Configuration
class S3Config(
    private val awsProperties: AwsProperties
) {
    @Bean
    fun s3client(): S3Client {
        return S3Client.builder()
            .region(Region.of(awsProperties.region))
            .build()
    }
}
