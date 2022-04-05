import apiClient from "../../../services/api-client";
import { useEffect } from "react";
import { useState } from "react";
import { ArticleList } from "../../ArticleList";
import { ArticleThumbnailProps } from "../../ArticleThumbnail/ArticleThumbnail.types";

export const MeusArtigosPage = () => {

    const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

    async function buscaMeusArtigos() {
        const response = await apiClient.get<ArticleThumbnailProps[]>(
            '/artigos/meus-artigos'
        );
        setArticles(response.data);
    }

    useEffect(() => {
        buscaMeusArtigos();
    }, []);

    if (articles.length === 0) {
        return (<h1>Não há postagens</h1>);
    }

    return (
        <div className="my-30">
            <ArticleList articles={articles} />
        </div>
    );
}