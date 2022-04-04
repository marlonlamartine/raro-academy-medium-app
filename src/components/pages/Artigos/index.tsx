import faker from "@faker-js/faker";
import { useEffect, useState } from "react";
import { geraArtigos } from "../../../stories/helpers/gerador-artigos";
import { ArticleList } from "../../ArticleList";
import { ArticleThumbnailProps } from "../../ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../ArticleView";
import apiCliente from "../../../services/api-client";

export const ArtigosPage = () => {
    const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

    async function buscaArtigos() {
        const response = await apiCliente.get<ArticleThumbnailProps[]>(
            '/artigos'
        );
        setArticles(response.data);
    }

    useEffect(() => {
        buscaArtigos();

    }, [])

    return (
        <div className="my-30">
            <ArticleList articles={articles} />
        </div>
    );
}