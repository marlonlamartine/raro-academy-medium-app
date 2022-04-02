export type ArticleThumbnailProps = {
  id: number;
  imagem: string;
  titulo: string;
  resumo: string;
  dataPublicacao: Date;
  tempoLeitura?: string;
  autor: {
    id: number;
    nome: string;
    avatar: string;
  };
  editavel?: boolean;
  conteudo?: string;
}
