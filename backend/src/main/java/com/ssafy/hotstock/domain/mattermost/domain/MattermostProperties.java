package com.ssafy.hotstock.domain.mattermost.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ConfigurationProperties("notification.mattermost")
@Primary
public class MattermostProperties {

    private String channel;
    private String pretext;
    private String color;
    private String authorName;
    private String authorIcon;
    private String title;
    private String text = "";
    private String footer;
}
