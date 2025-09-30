import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Variáveis do Supabase não configuradas!');
  console.error('Configure SUPABASE_URL e SUPABASE_ANON_KEY no .env');
  process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Função para inicializar o banco de dados
export async function initDatabase() {
  console.log('🔧 Inicializando banco de dados Supabase...');
  
  try {
    // Verificar se o admin padrão existe
    const { data: admins, error: adminError } = await supabase
      .from('admins')
      .select('*')
      .limit(1);

    if (adminError) {
      console.error('Erro ao verificar admins:', adminError);
      return;
    }

    if (!admins || admins.length === 0) {
      console.log('👤 Criando admin padrão...');
      const bcrypt = await import('bcryptjs');
      const hashedPassword = bcrypt.default.hashSync('admin123', 10);
      
      const { error } = await supabase
        .from('admins')
        .insert([
          {
            username: 'admin',
            password: hashedPassword
          }
        ]);

      if (error) {
        console.error('Erro ao criar admin:', error);
      } else {
        console.log('✅ Admin padrão criado: username: admin, senha: admin123');
      }
    }

    // Verificar se existe conteúdo padrão do hero
    const { data: heroContent, error: heroError } = await supabase
      .from('hero_content')
      .select('*')
      .limit(1);

    if (heroError) {
      console.error('Erro ao verificar hero content:', heroError);
      return;
    }

    if (!heroContent || heroContent.length === 0) {
      console.log('📝 Criando conteúdo padrão do hero...');
      const { error } = await supabase
        .from('hero_content')
        .insert([
          {
            title: 'SOLLARA GARDEN',
            subtitle: 'BARRA MANSA',
            description: 'NOVIDADE NA REGIÃO SUL FLUMINENSE',
            video_url: 'https://youtube.com/shorts/5yVlGgId68A?si=OtBBLC3zousFbFgs',
            video_type: 'youtube',
            background_image: ''
          }
        ]);

      if (error) {
        console.error('Erro ao criar hero content:', error);
      } else {
        console.log('✅ Conteúdo padrão do hero criado');
      }
    }

    // Verificar se existem imagens padrão do carousel
    const { data: carouselImages, error: carouselError } = await supabase
      .from('carousel_images')
      .select('*')
      .limit(1);

    if (carouselError) {
      console.error('Erro ao verificar carousel images:', carouselError);
      return;
    }

    if (!carouselImages || carouselImages.length === 0) {
      console.log('🖼️ Criando imagens padrão do carousel...');
      const defaultImages = [
        {
          id: '1',
          url: '/lovable-uploads/076d0f9c-cbe0-478a-a8e0-82a18c4be423.png',
          alt: 'Vista aérea do condomínio Sollara Garden com área de lazer completa',
          title: 'Vista Aérea',
          description: 'Condomínio com área de lazer completa'
        },
        {
          id: '2',
          url: '/lovable-uploads/daec1aa2-95fd-4ad7-ad79-83d3e641f7f2.png',
          alt: 'Fachadas modernas das casas do Sollara Garden',
          title: 'Fachadas Modernas',
          description: 'Design contemporâneo e elegante'
        },
        {
          id: '3',
          url: '/lovable-uploads/40772c9a-33d3-43d2-bc8a-b4cd636f28ae.png',
          alt: 'Portaria moderna e elegante do condomínio Sollara Garden',
          title: 'Portaria Elegante',
          description: 'Entrada com segurança e sofisticação'
        },
        {
          id: '4',
          url: '/lovable-uploads/d912767b-33c2-4fda-bc3a-e1a7d4c736f8.png',
          alt: 'Área esportiva com quadra poliesportiva e piscina',
          title: 'Área Esportiva',
          description: 'Quadras e piscina para toda família'
        },
        {
          id: '5',
          url: '/lovable-uploads/6f379a2e-244d-4691-8766-fc92f3f7e0ad.png',
          alt: 'Casas modernas com design contemporâneo e garagem',
          title: 'Residências Modernas',
          description: 'Casas com garagem e acabamento premium'
        }
      ];

      const { error } = await supabase
        .from('carousel_images')
        .insert(defaultImages);

      if (error) {
        console.error('Erro ao criar carousel images:', error);
      } else {
        console.log('✅ Imagens padrão do carousel criadas');
      }
    }

    // Verificar se existe conteúdo padrão do footer
    const { data: footerContent, error: footerError } = await supabase
      .from('footer_content')
      .select('*')
      .limit(1);

    if (footerError) {
      console.error('Erro ao verificar footer content:', footerError);
      return;
    }

    if (!footerContent || footerContent.length === 0) {
      console.log('📄 Criando conteúdo padrão do footer...');
      const { error } = await supabase
        .from('footer_content')
        .insert([
          {
            company_name: 'SOLLARA GARDEN BARRA MANSA',
            tagline: 'Grupo Salha Empreendimentos',
            description: 'Transformando sonhos em realidade há mais de 30 anos na região do Vale do Paraíba',
            creci: '00000-J',
            cnpj: '00.000.000/0001-00'
          }
        ]);

      if (error) {
        console.error('Erro ao criar footer content:', error);
      } else {
        console.log('✅ Conteúdo padrão do footer criado');
      }
    }

    console.log('✅ Banco de dados inicializado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao inicializar banco de dados:', error);
  }
}

export default supabase;