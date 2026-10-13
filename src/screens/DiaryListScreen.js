import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import DiaryCard from '../components/DiaryCard';

// IMPORT GAMBAR LOKAL DI SINI (Sesuaikan nama file-nya)
import localHappyMood from '../../assets/moods/happy.png';
import myAvatar from '../../assets/avatar.png'; // Pastikan ada file avatar.png di folder assets/

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: 'https://picsum.photos/seed/happy/80',
    moodType: 'happy'
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
    moodType: 'focus'
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
    moodType: 'calm'
  },
  // TAMBAHAN 2 ENTRI BARU (TOTAL 5)
  {
    id: 4,
    title: 'Ujian Bikin Stres',
    date: '2025-10-03',
    preview: 'Belajar seharian buat ujian besok. Materinya susah banget masuk ke kepala...',
    moodUri: 'https://picsum.photos/seed/sad/80',
    moodType: 'sad'
  },
  {
    id: 5,
    title: 'Akhirnya Lulus Makul Ini!',
    date: '2025-10-01',
    preview: 'Nggak nyangka dapet nilai A untuk mata kuliah mobile programming! Seneng banget!',
    moodSource: localHappyMood, // MENGGUNAKAN GAMBAR LOKAL
    moodType: 'excited'
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* HEADER DENGAN AVATAR */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Buku Harian</Text>
        <Image source={myAvatar} style={styles.avatarImage} />
      </View>

      {/* RENDER LIST CARD */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          moodSource={entry.moodSource} 
          moodType={entry.moodType}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  content: { padding: 16 },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: '700' },
  avatarImage: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ddd' }, // backgroundColor buat jaga-jaga kalau gambar gagal load
});