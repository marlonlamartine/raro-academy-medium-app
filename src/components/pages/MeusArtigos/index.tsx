import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { geraArtigos } from "../../../stories/helpers/gerador-artigos";
import { ArticleList } from "../../ArticleList";
import { ArticleThumbnailProps } from "../../ArticleThumbnail/ArticleThumbnail.types";

export const MeusArtigosPage = () => {

    const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

    async function buscaMeusArtigos() {
        const token = localStorage.getItem("access_token");
        const response = await axios.get<ArticleThumbnailProps[]>(
            'http://3.221.159.196:3307/artigos/meus-artigos',
            {
                headers: {
                    'Authorization': 'bearer ${token}'
                }
            }
        );
        setArticles(response.data);
    }

    useEffect(() => {
        buscaMeusArtigos();
    }, []);




    return (
        <>
            <div className="my-30">
                <ArticleList articles={articles} />
            </div>
        </>
    );
}