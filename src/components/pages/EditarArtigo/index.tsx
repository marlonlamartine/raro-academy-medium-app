import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleForm } from "../../ArticleForm";
import { ArticleThumbnailProps } from "../../ArticleThumbnail/ArticleThumbnail.types";

export const EditarArtigoPage = () => {

    const [artigo, setArtigo] = useState<ArticleThumbnailProps>();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            buscarArtigo();
        }
    }, [id]);

    async function buscarArtigo() {
        const token = localStorage.getItem("access_token");

        const response = await axios.get<ArticleThumbnailProps>(
            'http://3.221.159.196:3307/artigos/${id}',
            {
                headers: {
                    'Authorization': 'bearer ${token}'
                }
            }
        );
        setArtigo(response.data);
    }

    const handleSubmit = (artigo: ArticleThumbnailProps) => {
        if (artigo.id) {
            console.log('=====> devo atualizar o artigo');
        } else {
            console.log('=====> devo criar um novo artigo');
        }
    }



    return (
        <div className="items-center justify-center m-10">
            <ArticleForm article={artigo}
                onSubmit={handleSubmit}
            />
        </div>
    );
}